import React from 'react';
import './Services.css';
import DevicesOtherIcon from '@mui/icons-material/DevicesOtherTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';



const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="icon-wrapper">
      {icon}
    </div>
    <h4>{title}</h4>
    <p>{description}</p>
    <a href="/learn-more">Learn More {'>'}</a>
  </div>
);

const Services = () => {
  return (
    <div className="services-section">
      <h2 sx={{mb:10}}>Fostering a playful & engaging learning environment</h2> 
      <div className="services-list">
        <ServiceCard
          icon={<DevicesOtherIcon/>}
          title="User Experience"
          description="Lessons on design that cover the most recent developments."
        />
        <ServiceCard
          icon={<DisplaySettingsTwoToneIcon/>}
          title="Web Development"
          description="Classes in development that cover the most recent advancements in web."
        />
        <ServiceCard
          icon={<QueryStatsTwoToneIcon/>}
          title="Marketing"
          description="Marketing courses that cover the most recent marketing trends."
        />
      </div>
      <CarouselIndicator total={totalItems} current={currentItem} />
    </div>
  );
};

export default Services;
