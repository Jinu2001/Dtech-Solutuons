import React, { useState } from 'react';
import { Grid } from '@mui/material';
import DotNavigation from '../components/DotNavigation/DotNavigation';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import CreateIcon from '@mui/icons-material/Create';
import LanguageIcon from '@mui/icons-material/Language';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import RouterIcon from '@mui/icons-material/Router';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Services = () => {
  const [currentDot, setCurrentDot] = useState(0);

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '40px', marginBottom: '5%' }}>
      <h2>Fostering a playful & engaging learning environment</h2><br />
      <Grid container spacing={2} justifyContent="center">
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard
              icon={index % 6 === 0 ? <CreateIcon /> : index % 6 === 1 ? <LanguageIcon /> : index % 6 === 2 ? <DesktopWindowsIcon /> : index % 6 === 3 ? <PhoneAndroidIcon /> : index % 6 === 4 ? <RouterIcon /> : <TrendingUpIcon />}
              title={index % 6 === 0 ? "UI/UX Designing" : index % 6 === 1 ? "Web Application Development" : index % 6=== 2 ? "Desktop Application Development": index % 6 === 3 ?"Mobile Application Development" : index % 6 === 4 ? "IOT Project" : "Marketing"}
              description="Description based on index."
              onClick={() => handleCardClick(index % 3)}
            />
          </Grid>
        ))}
      </Grid><br /><br />
      <DotNavigation total={3} current={currentDot} onDotClick={setCurrentDot} />
    </div>
  );
};

export default Services;
