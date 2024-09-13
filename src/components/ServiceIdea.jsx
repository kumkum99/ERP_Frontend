import React from 'react';
import '../App.css'; // Import the CSS file

const ServiceIdea = ({ title, content, imageSrc, reverse }) => {
  return (
    <div className={`service-idea ${reverse ? 'reverse' : ''}`}>
      <div className="serviceImage">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="service_content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ServiceIdea;
