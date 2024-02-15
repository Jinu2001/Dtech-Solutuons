// Services.js
import React, { useState } from 'react';
import DotNavigation from '../components/DotNavigation/DotNavigation';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import 
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
      <h2>Fostering a playful & engaging learning environment</h2><br></br>
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
