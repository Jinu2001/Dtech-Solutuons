import React from 'react';
import './Services.css';

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="icon-wrapper">
      {icon}
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="/learn-more">Learn More {'>'}</a>
  </div>
);

const Services = () => {
  return (
    <div className="services-section">
      <h2>Fostering a playful & engaging learning environment</h2>
      <div className="services-list">
        <ServiceCard
          icon={<i className="fa fa-desktop" aria-hidden="true"></i>}
          title="User Experience"
          description="Lessons on design that cover the most recent developments."
        />
        <ServiceCard
          icon={<i className="fa fa-code" aria-hidden="true"></i>}
          title="Web Development"
          description="Classes in development that cover the most recent advancements in web."
        />
        <ServiceCard
          icon={<i className="fa fa-bullhorn" aria-hidden="true"></i>}
          title="Marketing"
          description="Marketing courses that cover the most recent marketing trends."
        />
      </div>
    </div>
  );
};

export default Services;
