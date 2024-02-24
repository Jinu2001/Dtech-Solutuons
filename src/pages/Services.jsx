// Services.js
import React, { useState } from 'react';
import DotNavigation from '../components/DotNavigation/DotNavigation';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import './Services.css';
import DevicesOtherIcon from '@mui/icons-material/DevicesOtherTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';

const Services = () => {
  const [currentDot, setCurrentDot] = useState(0);

  const handleCardClick = (index) => {
    setCurrentDot(index);
  };

  return (
    <div className="services-section">
      <span>Our Services</span><br></br>
      <span style={{fontSize:"36px" , fontWeight:'500'}}>Fostering a playful & engaging learning</span><br></br>
      <span style={{fontSize:"36px" , fontWeight:'500'}}>environment</span>
      <div className="services-list">
        <ServiceCard
          icon={<DevicesOtherIcon />}
          title="User Experience"
          description="Lessons on design that cover the most recent developments."
          onClick={() => handleCardClick(0)}
        />
        <ServiceCard
          icon={<DisplaySettingsTwoToneIcon />}
          title="Web Development"
          description="Classes in development that cover the most recent advancements in web."
          onClick={() => handleCardClick(1)}
        />
        <ServiceCard
          icon={<QueryStatsTwoToneIcon />}
          title="Marketing"
          description="Marketing courses that cover the most recent marketing trends."
          onClick={() => handleCardClick(2)}
        />
      </div><br></br><br></br>
      <DotNavigation total={3} current={currentDot} onDotClick={handleCardClick} />
    </div>
  );
};

export default Services;
