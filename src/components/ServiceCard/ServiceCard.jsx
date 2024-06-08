// ServiceCard.js
import React from 'react';
import './ServiceCard.css'; // Assuming you have specific styles for ServiceCard

const ServiceCard = ({ icon, title, description, onClick }) => (
  <div className="service-card" onClick={onClick}>
    <div style={{display: 'flex', flexDirection: 'row'}}>
    <div className="icon-wrapper">{icon}</div>
    <h4>{title}</h4>
    </div>
    <h5>{description}</h5>
    <a style={{marginRight:'205px'}} href="/learn-more" onClick={(e) => e.stopPropagation()}>Learn More {'>'}</a>
  </div>
);

export default ServiceCard;
