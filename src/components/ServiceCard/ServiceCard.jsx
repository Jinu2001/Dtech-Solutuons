// ServiceCard.js
import React from 'react';
import './ServiceCard.css'; // Assuming you have specific styles for ServiceCard

const ServiceCard = ({ icon, title, description, onClick }) => (
  <div className="service-card" onClick={onClick}>
    <div className="icon-wrapper">{icon}</div>
    <h4>{title}</h4>
    <p>{description}</p>
    <a href="/learn-more" onClick={(e) => e.stopPropagation()}>Learn More {'>'}</a>
  </div>
);

export default ServiceCard;
