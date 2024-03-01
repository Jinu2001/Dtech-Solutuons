import React, { useState, useEffect } from 'react';
import DotNavigation from '../components/DotNavigation/DotNavigation';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import DevicesOtherIcon from '@mui/icons-material/DevicesOtherTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';

const Services = () => {
  const [currentDot, setCurrentDot] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    servicesSection: {
      textAlign: 'center',
      backgroundColor: 'white',
      padding: '40px',
      marginBottom: '5%',
    },
    servicesList: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-around',
      marginTop: '20px',
    },
    serviceCard: {
      width: isMobile ? '100%' : 'initial', // Adjust card width on mobile
      marginBottom: isMobile ? '20px' : '0', // Add space between cards on mobile
    },
  };

  const handleCardClick = (index) => {
    setCurrentDot(index);
  };

  return (
    <div style={styles.servicesSection}>
      <h2>Fostering a playful & engaging learning environment</h2><br />
      <div style={styles.servicesList}>
        <ServiceCard
          icon={<DevicesOtherIcon />}
          title="User Experience"
          description="Lessons on design that cover the most recent developments."
          onClick={() => handleCardClick(0)}
          style={styles.serviceCard}
        />
        <ServiceCard
          icon={<DisplaySettingsTwoToneIcon />}
          title="Web Development"
          description="Classes in development that cover the most recent advancements in web."
          onClick={() => handleCardClick(1)}
          style={styles.serviceCard}
        />
        <ServiceCard
          icon={<QueryStatsTwoToneIcon />}
          title="Marketing"
          description="Marketing courses that cover the most recent marketing trends."
          onClick={() => handleCardClick(2)}
          style={styles.serviceCard}
        />
      </div><br /><br />
      <DotNavigation total={3} current={currentDot} onDotClick={handleCardClick} />
    </div>
  );
};

export default Services;
