import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// Importing all images
import erpImage from '../assets/images/erpppp.jpg';
import chanchalImage from '../assets/images/chanchal.jfif';
import sajanImage from '../assets/images/sajan.jfif';
import sandhyaImage from '../assets/images/sandhya.jfif';
import rohitImage from '../assets/images/rohit.jfif';
import kumkumImage from '../assets/images/Kumkum.jpeg';
import sumitImage from '../assets/images/sumit.jpg';
import monikaImage from '../assets/images/monika.jpg';
import sauravImage from '../assets/images/saurav.jpg';

const About = () => {
   
    return (
        <div>
        <Navbar />
        <section id="about" className="content-section">
            <section className="about">
                <div className="full-width-containerAbout">
                    <div>
                        <h1>About Us</h1>
                        <div className="underline"></div>
                    </div>
                </div>

                <section className="ServicesIdea">
                    <div className="serviceImage">
                        <img src={erpImage} alt="Project-Based ERP Leader" />
                    </div>
                    <div className="service_content">
                        <h2>Enterprise Resource Planning</h2>
                        <p>
                            Our mission is to empower businesses with transformative ERP solutions that enhance operational efficiency,
                            foster growth, and drive sustainable success. We strive to deliver tailored ERP implementations that align
                            seamlessly with our clients' strategic objectives, enabling them to achieve operational excellence and competitive
                            advantage in their industries.
                            <a href="mailto:info@example.com" className="button">Explore More...</a>
                        </p>
                    </div>
                </section>

                <section className="testimonial-section">
                    <h2>Testimonial</h2>
                    <div className="testimonial-container">
                        <div className="testimonial">
                            <img src={chanchalImage} alt="Client 1" />
                            <p>Revolutionized our inventory management, but the learning curve was steep</p>
                            <h3>Chanchal</h3>
                        </div>
                        <div className="testimonial">
                            <img src={sajanImage} alt="Client 2" />
                            <p>Boosted productivity and reporting, though setup took longer than expected</p>
                            <h3>Sajan</h3>
                        </div>
                        <div className="testimonial">
                            <img src={sandhyaImage} alt="Client 3" />
                            <p>Enhanced cross-departmental coordination, yet the cost was higher than anticipated</p>
                            <h3>Sandhya</h3>
                        </div>
                        <div className="testimonial">
                            <img src={rohitImage} alt="Client 4" />
                            <p>This ERP system has streamlined our processes and improved efficiency across the board.</p>
                            <h3>Rohit</h3>
                        </div>
                    </div>
                </section>

                <section className="team-section">
                    <h2>Team Members</h2>
                    <div className="team-container">
                        <div className="team-member">
                            <img src={kumkumImage} alt="Team Member 1" />
                            <h3>Kumkum</h3>
                            <h4>Team Leader</h4>
                            <div className="team-social">
                                <a className="btn btn-square" href="https://www.linkedin.com/in/kumkum-singh-0a408a1b1/"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-square" href="https://github.com/kumkum99"><i className="fa-brands fa-github"></i></a>
                                <a className="btn btn-square" href="https://kumkum99.github.io/em-1portfolio/"><i className="fa-solid fa-user"></i></a>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src={sumitImage} alt="Team Member 2" />
                            <h3>Sumit Pandey</h3>
                            <h4>Team Member</h4>
                            <div className="team-social">
                                <a className="btn btn-square" href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-square" href="#"><i className="fa-brands fa-github"></i></a>
                                <a className="btn btn-square" href="#"><i className="fa-solid fa-user"></i></a>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src={monikaImage} alt="Team Member 3" />
                            <h3>Monika Pandey</h3>
                            <h4>Team Member</h4>
                            <div className="team-social">
                                <a className="btn btn-square" href="https://www.linkedin.com/in/monika-pandey-2184b924b"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-square" href="https://github.com/monipandey"><i className="fa-brands fa-github"></i></a>
                                <a className="btn btn-square" href="https://monipandey.github.io/creative-cv/"><i className="fa-solid fa-user"></i></a>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src={sauravImage} alt="Team Member 4" />
                            <h3>Saurav</h3>
                            <h4>Team Member</h4>
                            <div className="team-social">
                                <a className="btn btn-square" href="https://www.linkedin.com/in/saurav-b08282289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-square" href="#"><i className="fa-brands fa-github"></i></a>
                                <a className="btn btn-square" href="#"><i className="fa-solid fa-user"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
        <Footer />
        </div>
    );
  
};

export default About;
