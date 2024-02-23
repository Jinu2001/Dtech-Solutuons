// BoxComponent.js
import React from 'react';

const BoxComponent = ({ title, details }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
    <h3>{title}</h3>
    <p>{details}</p>
  </div>
);

export default BoxComponent;
