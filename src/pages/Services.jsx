import React, { useState } from 'react';
import './Services.css';
import DevicesOtherIcon from '@mui/icons-material/DevicesOtherTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';

class DotNavigation extends React.Component {
  render() {
    const dotStyle = {
      height: '15px',
      width: '15px',
      borderRadius: '50%',
      backgroundColor: '#bbb',
      display: 'inline-block',
      margin: '0 5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    };

    // Updated activeDotStyle to turn the dot into a line
    const activeDotStyle = {
      ...dotStyle,
      width: '30px', // Increase width to make it appear as a line
      borderRadius: '7px', // Reduce border-radius to remove the rounded edges
      backgroundColor: '#1B86C8', // Keep the active color
    };

    return (
      <div style={{ textAlign: 'center' }}>
        {Array.from({ length: this.props.total }, (_, i) => (
          <span
            key={i}
            style={this.props.current === i ? activeDotStyle : dotStyle}
            onClick={() => this.props.onDotClick(i)}
          />
        ))}
      </div>
    );
  }
}
const ServiceCard = ({ icon, title, description, onClick }) => (
  <div className="service-card" onClick={onClick}>
    <div className="icon-wrapper">{icon}</div>
    <h4>{title}</h4>
    <p>{description}</p>
    <a href="/learn-more" onClick={(e) => e.stopPropagation()}>Learn More {'>'}</a>
  </div>
);

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
