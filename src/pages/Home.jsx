import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import accountImage from '../assets/images/account2.jpg';
import hrmImage from '../assets/images/hrm3.jpg';
import busImage from '../assets/images/bus2.jpg';
import supplyImage from '../assets/images/supply.jpg';
import erpImage from '../assets/images/erpsystem2.jpg';
import homeVideo from '../assets/images/homevd.mp4';


const HomeSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div>
      <Navbar />
      <main>
        <section
          id="home"
          className="content-section"
          style={{ display: activeSection === "home" ? "block" : "none" }}
        >
          <section className="home">
            <div className="main-content">
              <div className="home-page hero">
                <div className="hero_background">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="background-video"
                  >
                    <source src={homeVideo} type="video/mp4" />
                  </video>
                </div>
                <div className="hero_content">
                  <div className="hero_content_text">
                    <h1>ERP System</h1>
                    <p>
                      ERP platform means that you have one place to assess
                      performance and metrics by <br />
                      project, department, client, project manager, vendor, etc.
                    </p>
                  </div>
                  <div className="btn-content_cta">
                    <div className="btn-cta_primary btn-no-border">
                      <a
                        title="Contact Us"
                        href="/contact"
                        onClick={() => showSection("contact")}
                      >
                        Contact Us
                      </a>
                    </div>

                    <div className="hero_content_cta_video-link modelbox_show">
                      <span className="wwd">"What We Do"</span>
                      <a href="https://www.google.com/search?sca_esv=458fc5d25ecd7a59&rlz=1C1CHBF_enIN1042IN1042&sxsrf=ADLYWIKhf1tlUJSGbOdz579icKBKAQBP4g:1720849199493&q=erp+short+videos&tbm=vid&source=lnms&fbs=AEQNm0CvspUPonaF8UH5s_LBD3JPX4RSeMPt9v8oIaeGMh2T2PRrsfVPlQRxSTpQ4UUI6wdpgUZjCvQoq5Ehqqy4E5VpqvIcFJs0zO4mcPRxENNNxtdFArFakaI1ygyrJTSXndBYq4cXQfQCDX2YAQEeKQ413uxhGyAmaoCB5PRuiJrwBBZcYE9NuoxwUWH_XN_VXX2MKimdEsnYHrzD8iB3eagj01m3sA&sa=X&ved=2ahUKEwiPt_3ppqOHAxWfyDgGHfMTDvkQ0pQJegQICxAB&biw=1471&bih=654&dpr=1.2#fpstate=ive&vld=cid:71242dee,vid:c9HfNg4a_Og,st:0">
                        <i className="fa-solid fa-circle-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="news">
          <h2>KEY FEATURES OF PROJECT ERP?</h2>
          <div className="cards">
            <div className="card">
              <img src={accountImage} alt="Project-Based ERP Leader" />
              <h3>ACCOUNTING & FINANCIAL</h3>
              <p>
                Accounting provides reporting on project costs, revenues, profits and
                operations.accounting for the entire business rather than its subdivisions.
              </p>
            </div>
            <div className="card">
              <img src={hrmImage} alt="GovCon Study Unveiled" />
              <h3> HUMAN RESOURCE MANAGEMENT</h3>
              <p>
                HRM helps project managers delegate workloads and measure seasonal
                fluctuations for labor forecasting.
              </p>
            </div>
            <div className="card">
              <img src={busImage} alt="Deltek Delivers Value" />
              <h3>BUSINESS INTELLIGENCE</h3>
              <p>
                Being able to collate and review data to support business decision-making
                is essential for organizations across all industries.
              </p>
            </div>
            <div className="card">
              <img src={supplyImage} alt="GovCon Study Unveiled" />
              <h3>SUPPLY CHAIN MANAGEMENT</h3>
              <p>
                Single Channel for business partners collaborate, analyze and forecast
                based on a holistic understanding of product lifecycles.
              </p>
            </div>
          </div>
        </section>

        <section className="description">
          <div className="description_content">
            <h2>What is ERP?</h2>
            <p>
              ERP stands for enterprise resource planning, but what does ERP mean? The
              simplest way to define ERP is to think about all the core business processes
              needed to run a company: finance, HR, manufacturing, supply chain, services,
              procurement, and others. At its most basic level, ERP helps to efficiently
              manage all these processes in an integrated system. It is often referred to as
              the system of record of the organisation. Sometimes described as “the central
              nervous system of an enterprise,” an ERP software system provides the
              automation, integration, and intelligence that is essential to efficiently run
              all day-to-day business operations. Most or all of an organisation’s data
              should reside in the ERP system to provide a single source of truth across the
              business.
            </p>
          </div>
          <div className="erpImg">
            <img src={erpImage} alt="Project-Based ERP Leader" />
          </div>
        </section>

        <div className="editing">Enterprise Resource Planning</div>
        <div className="editbtn">
          <a href="/login">
            <button className="login-button">Login</button>
          </a>
        </div>
       
      </main>
      <Footer />
    </div>
  );
};

export default HomeSection;
