import React from 'react';
import './CarouselIndicator.css';

const CarouselIndicator = ({ total, current }) => {
  return (
    <div className="carousel-indicator">
      {Array.from({ length: total }, (_, index) => (
        <span key={index} className={`dot ${index === current ? 'active' : ''}`}></span>
      ))}
    </div>
  );
};
