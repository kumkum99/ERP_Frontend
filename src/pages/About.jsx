import React, { useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// Importing all images
import erpImage from '../assets/images/erpppp.jpg';
import anshikaImage from '../assets/images/anshika.jpeg';
import prateekImage from '../assets/images/prateek.png';
import chanchalImage from '../assets/images/chanchal.jfif';
import sajanImage from '../assets/images/sajan.jfif';
import sandhyaImage from '../assets/images/sandhya.jfif';
import rohitImage from '../assets/images/rohit.jfif';
import kumkumImage from '../assets/images/Kumkum.jpeg';
import sumitImage from '../assets/images/sumit.jpg';
import monika1Image from '../assets/images/monika1.jpeg';
import sauravImage from '../assets/images/saurav.jpg';
import leftArrow from '../assets/images/left-arrow.png'; // Adding arrow images
import rightArrow from '../assets/images/right-arrow.png';

const About = () => {
  // Testimonial data
  const testimonials = [
    {
      img: anshikaImage,
      text: 'The dashboard is user-friendly, but more beginner resources are needed.',
      name: 'Anshika',
    },
    {
      img: prateekImage,
      text: 'This ERP system has enhanced efficiency and streamlined processes.',
      name: 'Prateek',
    },
    {
      img: chanchalImage,
      text: 'Revolutionized our inventory management, but the learning curve was steep.',
      name: 'Chanchal',
    },
    {
      img: sajanImage,
      text: 'Boosted productivity and reporting, though setup took longer than expected.',
      name: 'Sajan',
    },
    {
      img: sandhyaImage,
      text: 'Enhanced cross-departmental coordination, yet the cost was higher than anticipated.',
      name: 'Sandhya',
    },
    {
      img: rohitImage,
      text: 'This ERP system has streamlined processes and enhanced overall efficiency.',
      name: 'Rohit',
    },
  ];

  // State for the current testimonial being displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous testimonial
  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to the next testimonial
  const handleNextClick = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

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
                <a href="mailto:erpUnity24@gmail.com" className="abtMail">Explore More...</a>
              </p>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="testimonial-section">
            <h2>Testimonial</h2>
            <div className="testimonial-container">
              {/* Left Arrow */}
              <button className="arrow-btn" onClick={handlePrevClick}>
                <img src={leftArrow} alt="Previous" />
              </button>

              {/* Display testimonials in a horizontal layout */}
              <div className="testimonial-grid">
                {testimonials.slice(currentIndex, currentIndex + 4).map((testimonial, idx) => (
                  <div key={idx} className="testimonial">
                    <img src={testimonial.img} alt={`Client ${testimonial.name}`} />
                    <p>{testimonial.text}</p>
                    <h3>{testimonial.name}</h3>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button className="arrow-btn" onClick={handleNextClick}>
                <img src={rightArrow} alt="Next" />
              </button>
            </div>
          </section>

          {/* Team Section */}
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
                <img src={monika1Image} alt="Team Member 3" />
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
                            <a href="mailto:erpUnity24@gmail.com" className="abt">Explore More...</a>
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
                                <a className="btn btn-square" href="https://www.linkedin.com/in/sumit-pandey-4b6976309"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-square" href="https://github.com/sumit10-08"><i className="fa-brands fa-github"></i></a>
                                <a className="btn btn-square" href=""><i className="fa-solid fa-user"></i></a>
                            </div>
                        </div>
                        <div className="team-member">
                            <img src={monikaPImage} alt="Team Member 3" />
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
>>>>>>> a272d591f378ce49af580c3b3677f30eddddfea5
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default About;
